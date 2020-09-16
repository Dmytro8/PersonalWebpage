export type ThemeType = {
  body: string;
  text: string;
  textOpacity: string;
  accent: string;
  gradient: string;
}

export const darkTheme = {
  body: '#0B132B',
  text: '#FFF',
  textOpacity: 'rgba(255, 255, 255, 0.5)',
  accent: '#6FFFE9',
  gradient: 'radial-gradient(50% 50% at 50% 50%, rgba(91, 192, 190, 0.22) 0%, rgba(91, 192, 190, 0) 100%);',
}

export const lightTheme = {
  body: '#EDF1FD',
  text: '#293241',
  textOpacity: 'rgba(41, 50, 65, 0.5)',
  accent: '#EE6C4D',
  gradient: 'radial-gradient(50% 50% at 50% 50%, rgba(238, 108, 77, 0.22) 0%, rgba(238, 108, 77, 0) 100%);',
}


