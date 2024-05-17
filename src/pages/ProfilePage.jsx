import { useSelector } from "react-redux";

const ProfilePage = () => {
    const { user, token } = useSelector((state) => state.auth);

    return (
        <div className="flex flex-col justify-center items-center bg-white mx-20 lg:mx-96 rounded-lg py-10 gap-8 shadow-md">
            <img
                src={"/images/jarjit.jpg"}
                alt=""
                className="rounded-full w-52 hover:scale-105 transition-all cursor-pointer"
            />
            <div className="flex flex-col justify-center items-center">
                <p className="text-xl font-bold text-primary">{user?.name}</p>
                <p className="text-lg text-slate-500">{user?.email}</p>
            </div>
        </div>
    );
};

export default ProfilePage;
