function PageContainer({ title, children }) {
  return (
    <div className="min-h-screen bg-[#FFF7ED] py-16 px-6">
      <div className="max-wmx-auto bg-white shadow-xl rounded-3xl p-8 md:p-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-[#1F2937] mb-8">
          {title}
        </h1>

        <div className="text-[#374151] leading-relaxed space-y-6 text-sm md:text-base">
          {children}
        </div>

      </div>
    </div>
  );
}

export default PageContainer;
