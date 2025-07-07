export const metadata = {
  title: 'ToDo App',
  description: 'Lista de Tarefas com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  )
}
