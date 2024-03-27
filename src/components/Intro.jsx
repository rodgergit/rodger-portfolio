import React from 'react';

function Intro() {
	return (
		<div className="flex items-center justify-center flex-col text-center pt-16 pb-6">
			<h1 className="text-4xl md:text-6xl dark:text-white mb-1 md:mb-3 font-bold">
				Rodger Chen
			</h1>
			<p className="text-base md:text-xl mb-3 font-medium">Software Engineer</p>
			<p className="text-sm max-w-xl mb-6">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
				adipisci aliquam maiores cum iure illum ad incidunt quas saepe
				voluptatum tenetur, delectus perspiciatis omnis est quisquam earum
				harum, debitis enim.
				<br />
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae delectus
				porro a dolore incidunt eligendi, temporibus ad totam deleniti saepe
				fugiat architecto, voluptatem, ipsa quo. Eaque voluptas dolores non
				reprehenderit!
			</p>
		</div>
	);
}

export default Intro;
