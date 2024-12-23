import FadeIn from '@/components/animations/FadeIn';
import AnimatedButton from '@/components/animations/AnimatedButton';
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex min-h-screen flex-col">
        <section className="min-h-[75vh] flex items-center justify-center bg-gradient-to-b from-background via-background to-secondary relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-[100rem] h-[100rem] rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent" />
            
            <div className="absolute inset-0 bg-grid-pattern opacity-30" />
            
            <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
            <div className="absolute -bottom-20 -right-10 w-[40rem] h-[40rem] rounded-full bg-primary/15 blur-3xl animate-float-delayed" />
          </div>

          <Hero />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <FadeIn>
              <h1 className="text-7xl font-bold gradient-text tracking-tight leading-tight py-2">
                Nicholas Byrne
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="text-2xl mb-8 text-foreground font-medium">
                Software Developer | Computer Science Student
              </p>
            </FadeIn>
            
            <FadeIn delay={0.4}>
              <p className="text-lg max-w-2xl mx-auto text-muted-foreground leading-relaxed">
                Welcome! I&apos;m a passionate software developer specializing in full-stack development
                with expertise in frontend technologies.
              </p>
            </FadeIn>
            
            <AnimatedButton 
              href="#experience"
              className="mt-12 shadow-sm hover:shadow-xl gradient-button inline-flex items-center px-7 py-5 rounded-full font-medium transition-all duration-200"
            >
              Learn More
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </AnimatedButton>
          </div>
        </section>

        
        <Experience />
        <Projects />
        <About />
        <Contact />
      </div>
    </>
  );
}
