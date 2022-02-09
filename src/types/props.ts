import { ReactNode } from 'react';

export type PropsWithClassName<P> = P & { className?: string | undefined };

export type PropsWithChildren<P> = P & { children?: ReactNode | undefined };

export type SCProps<P = Record<string, unknown>> = PropsWithChildren<P> & PropsWithClassName<P>;
