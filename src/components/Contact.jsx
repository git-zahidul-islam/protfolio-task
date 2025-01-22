export default function Contact() {
    return (
      <section id="contact" className="flex min-h-[50vh] flex-col items-center justify-center px-4 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-3xl dark:text-white">Lets Design Together</h1>
          <p className="mb-8 text-muted-foreground dark:text-white">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi
            convallis pretium
          </p>
          <form className="flex w-full max-w-md flex-col items-center gap-2 mx-auto sm:flex-row">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full rounded-md border border-input bg-background px-4 py-2"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto whitespace-nowrap rounded-md bg-[#FF6B00] px-8 py-2 font-medium text-white hover:bg-[#FF6B00]/90 transition-colors"
            >
              Contact Me
            </button>
          </form>
        </div>
      </section>
    )
  }
  
  