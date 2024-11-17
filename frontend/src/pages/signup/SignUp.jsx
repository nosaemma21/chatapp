import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto min-w-96">
      <div className="w-full p-6 bg-gray-400 bg-opacity-0 rounded-lg shadow-md bg-clip-padding backdrop-filter backdrop-blur-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          Sign Up <span className="text-blue-500">ChatApp</span>
        </h1>

        <form>
          {/* full name */}
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              className="w-full h-10 input input-bordered"
              placeholder="John Doe"
            />
          </div>

          {/* Username */}
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              className="w-full h-10 input input-bordered"
              placeholder="johnnybravo22"
            />
          </div>

          {/* Password */}
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full h-10 input input-bordered"
              placeholder="Enter Password"
            />
          </div>

          {/* Confirm password */}
          <div>
            <label className="p-2 label">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              className="w-full h-10 input input-bordered"
              placeholder="Confirm Password"
            />
          </div>
          <GenderCheckbox />

          <a
            href="#"
            className="inline-block mt-2 text-sm hover:underline hover:text-blue-600"
          >
            Already have an account?
          </a>

          <div>
            <button className="mt-2 btn btn-block btn-sm">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
