export default function CheckIcon({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="10" fill="#0D2B45" />
      <path d="M6 10l2.5 2.5L14 7" stroke="#F9F9F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}