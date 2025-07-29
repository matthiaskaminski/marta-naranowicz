import { TestimonialsSection } from "./testimonials-with-marquee"

const testimonials = [
  {
    author: {
      name: "Anna Kowalska",
      handle: "@anna_k",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    text: "Fantastyczna jakość obsługi! Szybkie odpowiedzi i profesjonalne podejście do każdego problemu.",
    href: "https://twitter.com/anna_k"
  },
  {
    author: {
      name: "Marcin Nowak",
      handle: "@marcin_dev",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    text: "Współpraca z tym zespołem to czysta przyjemność. Wszystko wykonane zgodnie z oczekiwaniami i terminowo."
  },
  {
    author: {
      name: "Karolina Wiśniewska",
      handle: "@karolina_w",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face"
    },
    text: "Polecam każdemu! Świetne rezultaty i bardzo konkurencyjne ceny. Zdecydowanie będę korzystać ponownie.",
    href: "https://twitter.com/karolina_w"
  },
  {
    author: {
      name: "Tomasz Zieliński",
      handle: "@tomasz_z",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Bardzo dobra komunikacja i transparentność w całym procesie. Czuję się bezpiecznie powierzając im swoje projekty."
  },
  {
    author: {
      name: "Magdalena Lewandowska",
      handle: "@magda_l",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    text: "Niesamowita kreatywność i innowacyjne podejście do rozwiązywania problemów. Przewyższyli moje oczekiwania!"
  },
  {
    author: {
      name: "Piotr Jankowski",
      handle: "@piotr_j",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    text: "Profesjonalizm na najwyższym poziomie. Każdy szczegół dopracowany, a końcowy efekt po prostu perfekcyjny.",
    href: "https://twitter.com/piotr_j"
  }
]

export function TestimonialsExample() {
  return (
    <TestimonialsSection
      title="Opinie naszych zadowolonych klientów"
      description="Dołącz do tysięcy zadowolonych klientów, którzy już nam zaufali i osiągnęli swoje cele"
      testimonials={testimonials}
    />
  )
}