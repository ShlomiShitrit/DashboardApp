import { auth } from "@/app/Firebase/db";
import { useRouter } from "next/navigation";

function withProtected(Component: any) {
    return function Protected(props: any) {
        const router = useRouter();
        const user = auth.currentUser;

        if (!user) {
            router.replace("/");
            return null;
        }

        return <Component {...props} />;
    };
}

export default withProtected;
