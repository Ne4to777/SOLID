type T = {
	phi: string
}

type S = T | {
	psi: string
}

const x: T = {
	phi: 'base'
}

const y: S = {
	psi: 'sub'
}