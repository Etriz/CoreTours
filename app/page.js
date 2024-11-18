import Image from 'next/image';
import { getLocalData } from '@/lib/getdata';

export default async function Home() {
	const localData = await getLocalData();
	const baseUrl = 'https://coretours.netlify.app/tours/';
	const itemMap = localData.tours.map((item) => {
		return (
			<li className="mb-2" key={item.id}>
				<a
					href={baseUrl + item.Url + '/index.htm'}
					rel="noopener noreferrer"
					target="_blank">
					{item.name}
				</a>
			</li>
		);
	});
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Image
					className="dark:invert"
					src="/corelogo.svg"
					alt="Core logo"
					width={280}
					height={100}
					priority
				/>
				<ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
					{itemMap}
				</ol>

				<div className="flex gap-4 items-center flex-col sm:flex-row">
					<a
						className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
						href="https://github.com/Etriz/CoreTours"
						target="_blank"
						rel="noopener noreferrer">
						Github Codebase
					</a>
				</div>
			</main>
		</div>
	);
}
