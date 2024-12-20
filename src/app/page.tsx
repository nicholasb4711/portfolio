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
        <section className="h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary dark:from-background dark:to-secondary">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Nicholas Byrne
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-xl mb-8 text-muted-foreground">
                Software Developer | Computer Science Student
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg max-w-2xl mx-auto text-foreground/80">
                Welcome! I&apos;m a passionate software developer specializing in full-stack development
                with expertise in frontend technologies.
              </p>
            </FadeIn>
            
            <AnimatedButton 
              href="#about"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground px-4 py-2 rounded-md font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow"
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
