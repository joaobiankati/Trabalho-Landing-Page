'use client'

import { useEffect, useState } from 'react'
import { IFOOD_FONT_TEXT } from '@/src/theme/ifoodFonts'

export default function SignUpVoucher() {
  const [open, setOpen] = useState(true)
  const [revealed, setRevealed] = useState(false)
  const [withIntro, setWithIntro] = useState(true)

  useEffect(() => {
    let raf1 = 0
    let raf2 = 0
    let cancelled = false
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        if (!cancelled) setRevealed(true)
      })
    })
    return () => {
      cancelled = true
      cancelAnimationFrame(raf1)
      cancelAnimationFrame(raf2)
    }
  }, [])

  useEffect(() => {
    if (!revealed || !withIntro) return
    const t = window.setTimeout(() => setWithIntro(false), 400)
    return () => clearTimeout(t)
  }, [revealed, withIntro])

  if (!open) return null
  if (!revealed) return null

  return (
    <div
      className={
        withIntro
          ? 'landing-sign-up-voucher landing-sign-up-voucher--intro'
          : 'landing-sign-up-voucher'
      }
      onAnimationEnd={(e) => {
        if (e.currentTarget === e.target && e.animationName === 'show-voucher') {
          setWithIntro(false)
        }
      }}
      style={{
        display: 'grid',
        gridTemplateColumns: '54px 182px 15px',
        columnGap: '20px',
        width: '333px',
        height: '134px',
        padding: '20px',
        margin: 0,
        backgroundColor: 'rgb(255, 255, 255)',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(247, 247, 247)',
        borderRadius: '4px',
        boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 8px 0px',
        fontFamily: IFOOD_FONT_TEXT,
        fontSize: '16px',
        lineHeight: '18.4px',
        textRendering: 'optimizeLegibility',
        WebkitTextSizeAdjust: '100%',
        WebkitFontSmoothing: 'antialiased',
        unicodeBidi: 'isolate',
      }}
    >
      <span
        style={{
          display: 'block',
          position: 'relative',
          width: '54px',
          height: '54px',
          lineHeight: '18.4px',
        }}
      >
        <img src="/images/sign-up-voucher.svg" alt="" width={54} height={54} style={{ display: 'block' }} />
      </span>

      <div
        style={{
          display: 'grid',
          gridTemplateRows: '24px 48px 20px',
          width: '182px',
          height: '92px',
          lineHeight: '18.4px',
        }}
      >
        <p
          style={{
            margin: 0,
            paddingBottom: '4px',
            width: '182px',
            height: '24px',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '20px',
            color: '#3e3e3e',
          }}
        >
          Ganhe cupons!
        </p>
        <p
          style={{
            margin: 0,
            paddingBottom: '13px',
            width: '182px',
            height: '48px',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '16px',
            color: '#717171',
          }}
        >
          Pegue seu cupom e aproveite o desconto
        </p>
        <a
          href="/404"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '182px',
            height: '20px',
            margin: 0,
            padding: 0,
            border: 'none',
            background: 'transparent',
            color: '#ea1d2c',
            fontFamily: IFOOD_FONT_TEXT,
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '18.4px',
            cursor: 'pointer',
            textDecoration: 'none',
            position: 'relative',
            overflow: 'hidden',
            transition: 'all 0.1s ease',
            WebkitTapHighlightColor: 'transparent',
          }}
        >
          <span
            style={{
              display: 'block',
              flexGrow: 1,
              position: 'relative',
              top: '1px',
              width: '182px',
              height: '14px',
              fontSize: '14px',
              fontWeight: 500,
              lineHeight: '14px',
              textAlign: 'left',
            }}
          >
            Criar conta
          </span>
        </a>
      </div>

      <button
        type="button"
        aria-label="Fechar"
        onClick={() => setOpen(false)}
        style={{
          display: 'grid',
          placeItems: 'center',
          width: '15px',
          height: '40px',
          margin: 0,
          padding: 0,
          border: 'none',
          borderRadius: '100%',
          background: 'transparent',
          color: '#ea1d2c',
          cursor: 'pointer',
          position: 'relative',
          top: '-14px',
          left: '-2px',
          transition: 'all 0.1s ease',
          WebkitTapHighlightColor: 'transparent',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path
            d="M5 5L15 15M15 5L5 15"
            stroke="#ea1d2c"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  )
}
