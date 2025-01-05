import { HomeAssessment } from "@/components/HomeAssessment";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-2xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Home Assessment</h1>
          <p className="text-gray-600">Tell us about your home to get a detailed assessment</p>
        </div>
        <HomeAssessment />
      </div>
    </div>
  );
};

export default Index;