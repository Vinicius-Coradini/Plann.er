import { ComponentProps, ReactNode } from "react"
import { tv, VariantProps } from 'tailwind-variants'

const buttonVariants = tv({
    base: 'rounded-lg px-5 py-2 font-medium flex items-center justify-center gap-2',

    //Para alterar o botão crio as variantes
    variants: {
        variant: {
            primary: 'bg-lime-300 text-lime-950 hover:bg-lime-400',
            secondary: 'bg-zinc-800 text-zinc-200 hover:bg-zinc-700',
        },

        size: {
            default: 'py-2',
            full: 'w-full h-11'
        },

        border: {
            default: 'rounded-lg',
            borderNone: 'rounded-none'
        },

    },

    //Serve para ter um padrão caso eu não informar
    defaultVariants: {
        variant: 'primary',
        size: 'default',
        default: 'default'
    }
})

interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof buttonVariants> {
    children: ReactNode
}

export function Button({
    children,
    variant,
    size,
    border,
    ...props

}: ButtonProps) {
    return (
        <button {...props} className={buttonVariants({ variant, size, border })}>
            {children}
        </button>
    )
}