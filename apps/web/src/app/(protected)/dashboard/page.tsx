import LoginWithGithubForm from "@/components/forms/authentication/login-with-github.form";

export default async function Page() {
  return (
    <main>
      <section>
        <h1>Dashboard</h1>
      </section>
      <section>
        <LoginWithGithubForm />
      </section>
    </main>
  );
}
