import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

// Configure with actual Google Form URL when provided by client
export const GOOGLE_FORM_URL = "REPLACE_WITH_CLIENT_FORM_URL";

export default function GoogleFormEmbed({ formUrl = GOOGLE_FORM_URL }) {
  const isConfigured = formUrl && formUrl !== "REPLACE_WITH_CLIENT_FORM_URL";

  return (
    <div className="w-full my-8 bg-[#F2EDE2] border-2 border-dashed border-[#7a9660]/40 rounded-xl p-8 text-center shadow-inner">
      {isConfigured ? (
        <div className="w-full overflow-hidden rounded-lg min-h-[600px]">
          <iframe
            src={formUrl}
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="MINDFL Application Form"
            className="w-full rounded-lg border-0"
          >
            Loading Application Form…
          </iframe>
        </div>
      ) : (
        <div className="max-w-md mx-auto space-y-4 py-6">
          <div className="w-14 h-14 bg-[#7a9660]/20 text-[#5e7a45] rounded-full flex items-center justify-center mx-auto">
            <FileText className="w-7 h-7" />
          </div>
          <h4 className="font-serif text-xl font-bold text-[#1F291E]">
            [ Embed Google Form Here ]
          </h4>
          <p className="text-xs text-[#5C665A] leading-relaxed">
            Google Form embed placeholder as specified in the MINDFL documentation. Configure the <code className="bg-[#EAE4D7] px-1.5 py-0.5 rounded text-[#3a5238]">GOOGLE_FORM_URL</code> with the live client form URL to display the interactive application form.
          </p>
          <div className="pt-2">
            <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#7a9660] text-white text-xs font-semibold rounded-md shadow-sm">
              <ExternalLink className="w-4 h-4" /> Apply Form Component Ready
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
