export const Projects = () => {
    return (
        <div className="flex items-center justify-center flex-col">
            <div className="max-w-3xl">
                <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl font-bold mb-4 text-center">Real Estate Evaluation</h2>
                Led a seven-person team to develop ML-powered house price predictor for District 10, HCMC based on three most important factors: location, size, number of bedrooms. <br></br>
                <br></br>
                Orchestrated full development pipeline with weekly reports: data scraping, data preprocessing, exploratory data analysis, model training, website deploying through Flask. <br></br>
                <br></br>
                Reduced noise by downsampling by 60% (12k → 5k samples) and erased outliers by removing the third standard deviation of the filtered dataset. <br></br>
                <br></br>
                Applied XGBoost and Optuna for hyperparameter tuning, increasing the accuracy by 50% on the second test set run. <br></br>
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl mb-0 font-bold text-center">Image Classification</h2>
                <p className="text-md font-bold mb-4 text-center">github.com/painnotgood/cifar10-resnet34</p>
                Experimented 3 different classification architectures on the CIFAR-10 dataset with no pretrained models under the time constraints of 4 hours for implementing, tuning, and training.<br></br>
                <br></br>
                Generated over 100 hyperparameter combinations while narrowing down the range gradually on a uniform distribution to find the best hyperparameters. Applied advanced data augmentation strategies for images and model ensemble on 10 different random restart points.<br></br>
                <br></br>
                Results: 95% accuracy on the test set.
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl font-bold mb-4 text-center">Green City Robot</h2>
                Led a team of 6 members to design, build, and program an autonomous robot using Arduino for a Physics-Informatics Interdepartmental Thematic Report to Department of Education of Ho Chi Minh City and various schools in the area. <br></br>
                <br></br>
                Built a robot capable of doing a series of 5 tasks - activating the renewable electricity factory, planting trees, destroying polluting factories, sorting waste, and measuring the pollution levels in the area - on a simulation map. <br></br>
                <br></br>
                Result: Won the Third Prize.
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl mb-4 font-bold text-center">AutoSAT</h2>
                Used JavaScript to scrape nearly 1000 readings from the CollegeBoard questions bank and download it as a PDF file.
                <br></br>
                <br></br>
                Wrote a Python script to parse the PDF into individual reading materials with correct answers stored separately and another script to automatically mark the scores.
                </div>
                <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl mb-4 font-bold text-center">Card Battle</h2>
                Led a team of 10+ members to create a turn-based card battle game using Unity.<br></br>
                <br></br>
                Divide members into 3 groups with weekly report: Game Design, Art Design, and Programming. Coordinated between groups to ensure smooth workflow and timely delivery of tasks.<br></br>
                </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl font-bold mb-4 text-center">Find Your Side</h2>
                Led a team of 3 members to design and develope a Web-based quiz to find out one's personalities.<br></br>
                <br></br>
                The user will respond to 20 carefully handpicked questions.Then the system analyzes users' answers to determine their personality traits and suggest suitable career paths.<br></br>
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl mb-0 font-bold text-center">Spot the Toxic!</h2>
                <p className="text-md font-bold mb-4 text-center">github.com/painnotgood/cifar10-resnet34</p>
                Built multi-label classifier to spot and identify 6 types of toxicity in Twitter comments: toxic, severe toxic, obscene, threat, insult, and identity hate.<br></br>
                <br></br>
                Achieved 91.4% ROC AUC on test set through blending TF-IDF + Logistic Regression (&gt;97% ROC AUC for validation set) ensemble and BiLSTM.<br></br>
                <br></br>
                Increased BiLSTM ROC AUC by 10% by averaging best results in different seeds.
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl mb-0 font-bold text-center">2025 High School Graduation Test Score Analysis</h2>
                <p className="text-md font-bold mb-4 text-center">github.com/painnotgood/students-score-analysis</p>
                 Scraped 96,917 student's scores &#8211; all had Vietnamese characters without the need of preprocessing UTF-8 &#8211; from Ho Chi Minh City Department of
Education website through console-friendly JavaScript code and HTML elements manipulation<br></br>
                <br></br>
                Computed and visualized key statistical metrics for 96,917 scores; identified that 66.9% of students scored
above the national median in CS and 44.86% scored below the national median in Agriculture Technology (more analysis in Github).<br></br>
            </div>
            <div className="bg-gray-800 mt-8 text-base space-y-3 bg-white-10 p-4 rounded-lg border border-gray-600 transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-xl hover:shadow-white/20">
                <h2 className="text-4xl mb-4 font-bold text-center">2022 Middle School Graduation Test Score Analysis</h2>
                 Scraped approximately 97000 student's scores from Ho Chi Minh City Department of
Education website using curl and a Python program.<br></br>
                <br></br>
                Programmed Python to deal with HTML's UTF-8 encoding to translate it back to Vietnamese.<br></br>
                <br></br>
                Analyzed the data and correctly predict the cut-off score for specialized schools in Ho Chi Minh City for the 2023 Middle School Graduation Test with 1.67% margin of error.<br></br>
                <br></br>
                Continue to apply the program to scrape and analyze the 2023 Middle School Graduation Test scores with minor modifications to include more candidates information.<br></br>
            </div>
            </div>
            
        </div>
    );
}