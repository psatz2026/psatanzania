import Avatar from "@/components/ui/Avatar";

interface ReviewCardProps {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export default function ReviewCard({ quote, author, role, image }: ReviewCardProps) {
  return (
    <div className="flex flex-col gap-6 p-8 bg-white rounded-2xl border border-carbon-black-5 hover:shadow-lg transition-shadow duration-300">
      <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
        <path
          d="M0 24V14.4C0 10.4 1.2 7.06667 3.6 4.4C6 1.73333 9.2 0.266667 13.2 0L14.4 2.4C11.6 3.06667 9.4 4.4 7.8 6.4C6.2 8.4 5.4 10.8 5.4 13.6H10.8V24H0ZM17.6 24V14.4C17.6 10.4 18.8 7.06667 21.2 4.4C23.6 1.73333 26.8 0.266667 30.8 0L32 2.4C29.2 3.06667 27 4.4 25.4 6.4C23.8 8.4 23 10.8 23 13.6H28.4V24H17.6Z"
          fill="#2E8FD0"
          opacity="0.3"
        />
      </svg>
      <p className="font-body text-[17px] leading-[1.7] text-carbon-black italic">{quote}</p>
      <div className="flex items-center gap-3 pt-2 border-t border-carbon-black-5">
        <Avatar src={image} alt={author} size={44} />
        <div>
          <p className="font-heading text-[15px] text-carbon-black">{author}</p>
          <p className="font-body text-[13px] text-steel-gray">{role}</p>
        </div>
      </div>
    </div>
  );
}
