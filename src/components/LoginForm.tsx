import { useForm } from "react-hook-form";

// agregar usuario
const users = [
    {
        name: "user123@gmail.com",
        password: "user123",
    },
];

export default function LoginForm() {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<{ email: string; password: string }>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);

        const user = users.find(
            (user) =>
                user.name === data.email && user.password === data.password
        );
        if (user) {
            alert("Login successful");
        } else {
            alert("Login failed");
        }
    });

    return (
        <section className="flex flex-col items-center">
            <div>
                <img src="/logo-colored.svg" alt="logo colored" />
                <h1 className="text-3xl font-bold">VANITY</h1>
            </div>

            <form onSubmit={onSubmit} className="flex flex-col xl:w-96 w-64">
                <input
                    type="email"
                    placeholder="Email"
                    className="bg-[#232628] px-2 h-10 xl:h-14 text-base xl:text-2xl font-extralight rounded-xl mt-10"
                    {...register("email", { required: "Email is required" })}
                />
                {errors.email && (
                    <span className="text-red-400 mt-3">
                        {errors.email.message}
                    </span>
                )}

                <input
                    type="password"
                    placeholder="Password"
                    className="bg-[#232628] px-2 h-10 xl:h-14 text-base xl:text-2xl font-extralight rounded-xl mt-10"
                    {...register("password", {
                        required: "Password is required",
                    })}
                />
                {errors.password && (
                    <span className="text-red-400 mt-3">
                        {errors.password.message}
                    </span>
                )}

                <p className="text-xs mt-4">Forgot password?</p>
                <button
                    className="mt-5 bg-[#0F0F10] py-2 rounded-xl font-bold text-base xl:text-3xl"
                    type="submit"
                >
                    Login
                </button>
                <button className="mt-5 bg-[#0F0F10] py-2 rounded-xl font-bold text-base xl:text-3xl">
                    Login with <span className="text-[#4254E3]">Gmail</span>
                </button>
                <button className="mt-5 bg-[#0F0F10] py-2 rounded-xl font-bold text-base xl:text-3xl">
                    Login with <span className="text-[#4254E3]">Yahoo</span>
                </button>

                <div className="mt-10 text-xs">
                    <p>
                        Don't have an account?{" "}
                        <a className="text-[#4254E3]" href="/login">
                            Register
                        </a>
                    </p>
                </div>
            </form>
        </section>
    );
}
