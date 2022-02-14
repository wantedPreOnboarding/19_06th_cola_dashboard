import { ReactNode } from 'react';

export type PropsWithClassName<P> = P & { className?: string };

export type PropsWithChildren<P> = P & { children?: ReactNode };

export type SCProps<P = Record<string, unknown>> = PropsWithChildren<P> & PropsWithClassName<P>;
