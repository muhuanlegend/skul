import TextGenerateEffect from '@/components/ui/typewriter';

export default function TypewriterDemo() {
  return (
    <div className="flex items-center justify-center">
      <TextGenerateEffect words="Welcome Sir!" className="text-xl font-bold" />
    </div>
  );
}
