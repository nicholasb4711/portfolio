import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';
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
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-5xl font-bold mb-6">
                Nicholas Byrne
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl mb-8">
                Software Developer | Computer Science Student
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg max-w-2xl mx-auto">
                Welcome! I&apos;m a passionate software developer specializing in full-stack development
                with expertise in frontend technologies.
              </p>
            </FadeIn>
            
            <AnimatedButton 
              href="#about"
              className="p-5 m-10 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-lg border border-primary hover:bg-primary hover:text-accent-foreground hover:border-accent transition-colors"
            >
              Learn More
            </AnimatedButton>
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
