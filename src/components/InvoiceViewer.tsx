import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";

export const InvoiceViewer = () => (
  <div className="container mx-auto p-4">
    <h1 className="text-2xl font-bold mb-4">Invoice Preview</h1>

    <PDFViewer style={{ width: "100%", height: "80vh" }}>
      <Invoice />
    </PDFViewer>
  </div>
);
