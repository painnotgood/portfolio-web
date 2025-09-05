export const School = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="max-w-3xl">
                <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl font-bold mb-4 text-center">Arizona State University</h2>
                <ul className="list-disc list-inside">
                    <li>Bachelor of Science in Computer Science; Barrett, The Honors College Student</li>
                    <li>Expected Graduation: May 2029</li>
                    <li>Research Experience: LENS Lab</li>
                </ul>
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl font-bold mb-4 text-center">Tran Dai Nghia High School for the Gifted</h2>
                <ul className="list-disc list-inside">
                    <li>High School Diploma: Computer Science Specialization Program</li>
                    <li>Graduated May 2025; GPA: 9.64/10 (Top 3 in class)</li>
                    <li>Relevant Coursework: Data Structures, Algorithms, Competitive Programming, Machine Learning, Web Development, Networks, Database</li>
                    <li>Activities: Music Club, German Club</li>
                    <li>Class Entrance Valedictorian, Class President</li>
                </ul>
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl font-bold mb-4 text-center">Tran Dai Nghia High School for the Gifted</h2>
                <ul className="list-disc list-inside">
                    <li>Middle School Diploma</li>
                    <li>Graduated: May 2022</li>
                    <li>School Acceptance Rate: ~12%</li>
                </ul>
            </div>
            </div>
            
        </div>
    );
}