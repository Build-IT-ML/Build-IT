export default function Footer(){
	return(
		<>
			<footer className="p-12 space-y-10 md:space-y-0 text-white bg-primary flex flex-wrap">
				<aside className="w-full md:w-2/4 space-y-6">
					<img
						src="asset/images/footer-logo.png"
						className=""
						alt="Build-IT 2024"
					/>
					<p className="capitalize mt-10">
						empowering students to shape the next generation of information technology
					</p>
					<div className="contact space-y-1">
						<a className="flex items-center" href="#" rel="noopener noreferrer">
							<i className="pi pi-envelope mr-3 transition-all duration-300"></i>
							contact@student.unud.ac.id
						</a>
						<a className="flex items-center" href="#" rel="noopener noreferrer">
							<i className="pi pi-whatsapp mr-3 transition-all duration-300"></i>
							wa.me/6281333486847
						</a>
					</div>
					<div className="social-media flex items-center space-x-3 relative bottom-0">
						<a className="flex items-center" href="#" rel="noopener noreferrer">
							<i className="pi pi-instagram text-2xl transition-all duration-300"></i>
						</a>
						<a className="flex items-center" href="#" rel="noopener noreferrer">
							<i className="pi pi-tiktok text-2xl transition-all duration-300"></i>
						</a>
						<a className="flex items-center" href="#" rel="noopener noreferrer">
							<i className="pi pi-facebook text-2xl transition-all duration-300"></i>
						</a>
						<a className="flex items-center" href="#" rel="noopener noreferrer">
							<i className="pi pi-youtube text-2xl transition-all duration-300"></i>
						</a>
					</div>
				</aside>
				<nav className="w-full md:w-1/4">
					<h5 className="font-bold text-2xl mb-4">Quick Links</h5>
					<div className="quick-links">
						<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
							Tentang Kami
							<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
						</a>
						<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
							Timeline
							<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
						</a>
						<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
							FAQ
							<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
						</a>
						<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
							Merchandise
							<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
						</a>
					</div>

				</nav>
				<nav className="w-full md:w-1/4">
					<h5 className="font-bold text-2xl mb-4">Modul Pelatihan</h5>
					<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
						Algoritma dan Pemrograman
						<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
					</a>
					<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
						Basis Data
						<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
					</a>
					<a className="group mb-3 flex items-center" href="#" rel="noopener noreferrer">
						Jaringan Komputer
						<i className="pi pi-angle-right ml-1 group-hover:ml-2 transition-all duration-300"></i>
					</a>
				</nav>
			</footer>
			<footer className="pb-5 px-12 bg-primary text-white">
				<div className="divider h-[1px] w-full bg-white mb-4"></div>
				<p>Copyright © 2024 All rights reserved. </p>
			</footer>
		</>

	)
}