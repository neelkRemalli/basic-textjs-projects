const Account = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 p-8'>
      <div className='max-w-7xl mx-auto bg-white rounded-lg shadow-xl p-8'>
        <h1 className='text-3xl font-bold text-gray-800 mb-8'>
          Account Settings
        </h1>
       <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Profile Information</h2>
         <div className='space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-600'>
              Name
            </label>
            <input
              type='text'
              className=' mt-1 block w-full max-w-sm px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none shadow-sm focus:ring-2 focus:ring-blue-500'
              defaultValue='John Doe'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-600'>
              Email
            </label>
            <input
              type='email'
              className=' mt-1 block w-full max-w-sm px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none shadow-sm focus:ring-2 focus:ring-blue-500'
              defaultValue='John@example.com'
            />
          </div>
        </div>
       </div>
     
       <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Security</h2>
         <div className='space-y-4'>
          <div>
            <label className='block text-sm font-semibold text-gray-600'>
              Password
            </label>
            <input
              type='password'
              className=' mt-1 block w-full max-w-sm px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none shadow-sm focus:ring-2 focus:ring-blue-500'
              placeholder='Enter new password'
            />
          </div>
          <div>
            <label className='block text-sm font-semibold text-gray-600'>
              Confirm Password
            </label>
            <input
              type='password'
              className=' mt-1 block w-full max-w-sm px-4 py-2 rounded-lg border border-gray-300
          focus:outline-none shadow-sm focus:ring-2 focus:ring-blue-500'
              placeholder='Confirm new password'
            />
          </div>
        </div>
       </div>
       
       <div className="flex justify-start items-center gap-4">
        <button className="px-6 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-color">Cancel</button>
        <button className="px-6 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">Save Changes</button>
       </div>
      </div>
    </div>
  );
};
export default Account;
