/**
 * Shared layout for all course and path pages
 * Provides consistent navigation and presenter mode functionality
 */

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      {children}
    </div>
  )
}
