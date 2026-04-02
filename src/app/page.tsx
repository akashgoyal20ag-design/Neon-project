export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 to-purple-900">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">Nexa AI Chat</h1>
        <p className="text-xl text-gray-300 mb-8">Full-stack AI Chat Application</p>
        <div className="space-y-4">
          <a href="/auth/login" className="inline-block px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold">
            Login
          </a>
          <br />
          <a href="/auth/register" className="inline-block px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold">
            Register
          </a>
        </div>
      </div>
    </div>
  )
}