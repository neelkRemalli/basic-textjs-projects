import Link from "next/link"

const Settings = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-100 to-indigo-200 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow-2xl p-8">
        <h1 className="text-4xl text-gray-900 font-bold mb-4">Settings</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl"> Customize your account settings, profile, and notifications here.
          Choose an option from the sidebar to begin.</p>

          <div className="flex space-x-12">
            <div className="w-1/4 bg-white rounded-lg p-6 space-y-6">
              <h2 className="text-2xl text-gray-800 font-semibold mb-4">Quick Links</h2>
              <ul>
                <li>
                  <Link 
                  className="flex items-center text-lg text-gray-800 hover:text-indigo-600
                  transition-colors py-2 px-4 rounded-md hover:bg-indigo-50"
                  href='/dashboard/settings/account'>
                  <span className="text-indigo-600">Acount</span></Link>
                </li>
                <li>
                  <Link 
                  className="flex items-center text-lg text-gray-800 hover:text-yellow-600
                  transition-colors py-2 px-4 rounded-md hover:bg-yellow-50"
                  href='/dashboard/settings/notifications'>
                  <span className="text-yellow-600">Notifications</span></Link>
                </li>
                <li>
                  <Link 
                  className="flex items-center text-lg text-gray-800 hover:text-green-600
                  transition-colors py-2 px-4 rounded-md hover:bg-green-50"
                  href='/dashboard/settings/profile'>
                  <span className="text-green-600">Profile</span></Link>
                </li>

              </ul>
            </div>
          </div>

        
        
      </div>

    </div>
  )
}
export default Settings