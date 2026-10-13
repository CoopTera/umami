import { ReactNode } from 'react';
import { Text, Flexbox } from 'react-basics';
import wordmark from '@/assets/tera-logo.png';

export interface EmptyPlaceholderProps {
  message?: string;
  children?: ReactNode;
}

export function EmptyPlaceholder({ message, children }: EmptyPlaceholderProps) {
  return (
    <Flexbox direction="column" alignItems="center" justifyContent="center" gap={60} height={600}>
      <img src={wordmark.src} height={48} alt="Tera" style={{ width: 'auto' }} />
      <Text size="lg">{message}</Text>
      <div>{children}</div>
    </Flexbox>
  );
}

export default EmptyPlaceholder;
