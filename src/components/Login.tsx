import LoginForm from "@/components/LoginForm";

export default function Login() {
    return (
        <section className="login">
            <div className="container">
                <h2 className="title title--secondary login__title">LOG IN TO LEARN MORE</h2>
                <LoginForm />
            </div>
        </section>
    )
}
