import { NavLink } from 'react-router'
import { Path } from '@/common/routing'
import s from './Logo.module.css'

type LogoProps = {
    size?: 'small' | 'medium' | 'large'
    className?: string
}

export const Logo = ({ size = 'medium', className = '' }: LogoProps) => {
    return (
        <NavLink
            to={Path.Main}
            className={`${s.logoLink} ${s[size]} ${className}`}
            aria-label="CineMatch home"
        >
            <span className={s.mark} aria-hidden="true">C</span>
            <span className={s.wordmark}>CineMatch</span>
        </NavLink>
    )
}
