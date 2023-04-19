import Navbar1 from '../../components/header'
import Footer from '../../components/footer'
export default function DataSpage() {
    return (
     <>
     <div className='bg-slate-950'>
     <Navbar1/>
     <div className="p-5 mx-auto sm:p-10 md:p-16  bg-slate-950  text-white">
	<div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
		<img src="/images6.jpeg" alt="" className="w-full h-60 sm:h-96  bg-gray-500" />
		<div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md  bg-gray-900">
			<div className="space-y-2">
				<a rel="noopener noreferrer" href="#" className="inline-block text-2xl font-semibold sm:text-3xl">Data Science Course</a>
				<p className="text-xs  text-white">By
					<a rel="noopener noreferrer" href="#" className="text-xs hover:underline">Chatgpt</a>
				</p>
			</div>
			<div className=" text-white">
				<p>Our Data Science course is designed for individuals looking to gain a comprehensive understanding of data analysis, manipulation, and visualization.</p>
			</div>
		</div>
	</div>
</div>
<section className=" bg-slate-950  text-white">
	<div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
		<div>
			<h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl  text-rose-600">Data Science</h2>
			<p className="max-w-3xl mx-auto mt-4 text-xl text-center  text-white">Data science is the study of data to extract meaningful insights for business.</p>
		</div>
		<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
			<div>
				<h3 className="text-2xl font-bold tracking-tight sm:text-3xl  text-gray-50">Course Objectives</h3>
				<p className="mt-3 text-lg  text-white">By the end of the course, students will be able to:</p>
				<div className="mt-12 space-y-12">
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-400  text-gray-900">
								<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6  text-gray-50">Project Management Fundamentals</h4>
							<p className="mt-2  text-white">Learn the basics of project management, including how to plan, execute, and close out projects successfully.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-400  text-gray-900">
								<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6  text-gray-50">Effective Business Writing</h4>
							<p className="mt-2  text-white">Improve your written communication skills for the workplace, including emails, memos, and reports.</p>
						</div>
					</div>
					<div className="flex">
						<div className="flex-shrink-0">
							<div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-400  text-gray-900">
								<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
								</svg>
							</div>
						</div>
						<div className="ml-4">
							<h4 className="text-lg font-medium leading-6  text-gray-50">Introduction to Digital Marketing</h4>
							<p className="mt-2  text-white">Explore the world of digital marketing, including social media, SEO, and content marketing.</p>
						</div>
					</div>
				</div>
			</div>
			<div aria-hidden="true" className="mt-10 lg:mt-0">
				<img src="images7.jpg" alt="" className="mx-auto rounded-lg shadow-lg  bg-gray-500" />
			</div>
		</div>
		<div>
			<div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
				<div className="lg:col-start-2">
					<h3 className="text-2xl font-bold tracking-tight sm:text-3xl  text-gray-50">Course Syllabus</h3>
					<p className="mt-3 text-lg  text-white">Our course syllabus is designed to cover all the essential topics and skills needed to succeed in your field of interest.</p>
					<div className="mt-12 space-y-12">
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-400  text-gray-900">
									<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6  text-gray-50">Data Analysis Fundamentals</h4>
								<p className="mt-2  text-white">This section covers the fundamental concepts and techniques of data analysis, including exploratory data analysis, data visualization, and data cleaning.</p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-400  text-gray-900">
									<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6  text-gray-50">Statistical Inference and Machine Learning</h4>
								<p className="mt-2  text-white">This section covers the statistical inference techniques used in data science, such as hypothesis testing and regression analysis. </p>
							</div>
						</div>
						<div className="flex">
							<div className="flex-shrink-0">
								<div className="flex items-center justify-center w-12 h-12 rounded-md  bg-violet-400  text-gray-900">
									<svg  fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-7 h-7">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
									</svg>
								</div>
							</div>
							<div className="ml-4">
								<h4 className="text-lg font-medium leading-6  text-gray-50">Data Management and Big Data</h4>
								<p className="mt-2  text-white">This section covers the tools and techniques used to manage large data sets, including SQL and Hadoop. </p>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
					<img src="images8.jpg" alt="" className="mx-auto rounded-lg shadow-lg  bg-gray-500" />
				</div>
			</div>
		</div>
	</div>
</section>
<section className="m-4 md:m-8  bg-slate-950 text-white">
	<div className="container mx-auto p-4 my-6 space-y-2 text-center">
		<h2 className="text-5xl font-bold">Course Details</h2>
		<p className="text-white">This section provides a brief overview of the key details for our data science course, including course duration, prerequisites, and learning format.</p>
	</div>
	<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
		<div className="flex flex-col items-center p-4">
			<svg   viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Duration</h3>
			<div className="space-y-1 leading-tight">
				<p> 12 weeks</p>
				<p>5-7 hours per week</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg   viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8  text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Prerequisites</h3>
			<div className="space-y-1 leading-tight">
				<p>Python</p>
				<p>Java</p>
				<p>C ,C+</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg   viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8  text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Course Format</h3>
			<div className="space-y-1 leading-tight">
				<p>synchronous learning components</p>
				<p>asynchronous learning components</p>
				<p>Weekly quiz/Test</p>
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg   viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8  text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Certification</h3>
			<div className="space-y-1 leading-tight">
				<p>Upon completion of the course, students receive a certificate of completion</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg   viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8  text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Capstone Project</h3>
			<div className="space-y-1 leading-tight">
				<p>In the final weeks of the course, students work on a capstone project that involves applying their data science skills to a real-world problem.</p>
				
			</div>
		</div>
		<div className="flex flex-col items-center p-4">
			<svg   viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8  text-violet-400">
				<path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
			</svg>
			<h3 className="my-3 text-3xl font-semibold">Career Services</h3>
			<div className="space-y-1 leading-tight">
				<p>The course includes access to career services, such as resume and cover letter review, mock interviews, and networking opportunities with data science professionals. </p>
				
			</div>
		</div>
	</div>
</section>
     <Footer />
     </div>
     </>
    )
  }
  