import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl font-bold mb-6">
              Nicholas Byrne
            </h1>
            <p className="text-xl mb-8">
              Software Developer | Computer Science Student
            </p>
            <p className="text-lg max-w-2xl mx-auto">
              Welcome! I&apos;m a passionate software developer specializing in full-stack development
              with expertise in frontend technologies.
            </p>
            <div className="mt-8">
              <a
                href="#about"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </>
  );
}
