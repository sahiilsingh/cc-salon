export default function AdminLogin() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-sand text-ink p-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg border border-black/5 p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold mb-2">C&C Admin</h1>
          <h2 className="text-xl font-medium">Sign in to Admin</h2>
        </div>

        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2">Email Address</label>
            <input 
              type="email" 
              placeholder="owner@ccsalon.com" 
              className="w-full border rounded-lg p-3 outline-none focus:border-terracotta"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Password</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full border rounded-lg p-3 outline-none focus:border-terracotta"
              required 
            />
          </div>

          <button type="button" className="w-full bg-terracotta text-white font-medium py-3 rounded-lg hover:bg-terracotta/90 transition-colors">
            Sign In
          </button>
        </form>

        <div className="mt-6 p-4 bg-blush/20 rounded-lg text-sm text-center">
          <p className="font-medium text-terracotta mb-1">Demo Credentials:</p>
          <p>Email: <span className="font-medium">owner@ccsalon.com</span></p>
          <p>Password: <span className="font-medium">admin123</span></p>
        </div>
      </div>
    </div>
  );
}
