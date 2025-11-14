/**
 * Particle System for Algorithmic Art
 * Provides a flexible particle engine for visual effects
 */

export interface Vector2D {
  x: number
  y: number
}

export interface ParticleConfig {
  x: number
  y: number
  vx?: number
  vy: number
  radius?: number
  color?: string
  alpha?: number
  life?: number
  maxLife?: number
  decay?: number
}

export class Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  color: string
  alpha: number
  life: number
  maxLife: number
  decay: number
  isDead: boolean

  constructor(config: ParticleConfig) {
    this.x = config.x
    this.y = config.y
    this.vx = config.vx || 0
    this.vy = config.vy || 0
    this.radius = config.radius || 2
    this.color = config.color || "#FF4D00"
    this.alpha = config.alpha || 1
    this.life = config.life || 100
    this.maxLife = config.maxLife || 100
    this.decay = config.decay || 0.98
    this.isDead = false
  }

  update(): void {
    // Update position
    this.x += this.vx
    this.y += this.vy

    // Decay life
    this.life *= this.decay
    this.alpha = Math.max(0, this.life / this.maxLife)

    // Mark as dead if life is too low
    if (this.life < 0.1 || this.alpha < 0.01) {
      this.isDead = true
    }
  }

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.save()
    ctx.globalAlpha = this.alpha
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
    ctx.restore()
  }

  applyForce(fx: number, fy: number): void {
    this.vx += fx
    this.vy += fy
  }

  distanceTo(x: number, y: number): number {
    const dx = this.x - x
    const dy = this.y - y
    return Math.sqrt(dx * dx + dy * dy)
  }
}

export interface ParticleSystemConfig {
  maxParticles?: number
  emissionRate?: number
  particleConfig?: Partial<ParticleConfig>
}

export class ParticleSystem {
  particles: Particle[]
  maxParticles: number
  emissionRate: number
  particleConfig: Partial<ParticleConfig>

  constructor(config: ParticleSystemConfig = {}) {
    this.particles = []
    this.maxParticles = config.maxParticles || 200
    this.emissionRate = config.emissionRate || 5
    this.particleConfig = config.particleConfig || {}
  }

  emit(x: number, y: number, count: number = 1): void {
    for (let i = 0; i < count; i++) {
      if (this.particles.length >= this.maxParticles) break

      const particle = new Particle({
        x,
        y,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        ...this.particleConfig,
      })

      this.particles.push(particle)
    }
  }

  update(): void {
    // Update all particles
    this.particles.forEach((particle) => particle.update())

    // Remove dead particles
    this.particles = this.particles.filter((particle) => !particle.isDead)
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.particles.forEach((particle) => particle.draw(ctx))
  }

  applyGlobalForce(fx: number, fy: number): void {
    this.particles.forEach((particle) => particle.applyForce(fx, fy))
  }

  applyForceFromPoint(
    x: number,
    y: number,
    strength: number,
    maxDistance: number
  ): void {
    this.particles.forEach((particle) => {
      const distance = particle.distanceTo(x, y)
      if (distance < maxDistance && distance > 0) {
        const force = (strength * (maxDistance - distance)) / maxDistance
        const angle = Math.atan2(particle.y - y, particle.x - x)
        particle.applyForce(Math.cos(angle) * force, Math.sin(angle) * force)
      }
    })
  }

  clear(): void {
    this.particles = []
  }

  getCount(): number {
    return this.particles.length
  }
}

/**
 * Helper function to create particle burst effect
 */
export function createParticleBurst(
  system: ParticleSystem,
  x: number,
  y: number,
  count: number = 20,
  speed: number = 3
): void {
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count
    const vx = Math.cos(angle) * speed
    const vy = Math.sin(angle) * speed

    const particle = new Particle({
      x,
      y,
      vx,
      vy,
      radius: 3,
      ...system.particleConfig,
    })

    if (system.particles.length < system.maxParticles) {
      system.particles.push(particle)
    }
  }
}

/**
 * Helper function to create particle trail
 */
export function createParticleTrail(
  system: ParticleSystem,
  x: number,
  y: number,
  prevX: number,
  prevY: number,
  count: number = 3
): void {
  const dx = x - prevX
  const dy = y - prevY

  for (let i = 0; i < count; i++) {
    const t = i / count
    const px = prevX + dx * t
    const py = prevY + dy * t

    system.emit(px, py, 1)
  }
}
