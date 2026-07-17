import hero from "@/assets/hero-lab.jpg";
import qpBatch from "@/assets/qp-batch.jpg";
import rpWarehouse from "@/assets/rp-warehouse.jpg";
import rpiImport from "@/assets/rpi-import.jpg";
import qaInspection from "@/assets/qa-inspection.jpg";
import eqms from "@/assets/eqms.jpg";
import audit from "@/assets/audit.jpg";
import regulatory from "@/assets/regulatory.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import office from "@/assets/office.jpg";
import coldchain from "@/assets/coldchain.jpg";
import testingLab from "@/assets/testing-lab.jpg";


export const IMAGES: Record<string, string> = {
  "hero-lab": hero,
  "qp-batch": qpBatch,
  "rp-warehouse": rpWarehouse,
  "rpi-import": rpiImport,
  "qa-inspection": qaInspection,
  "eqms": eqms,
  "audit": audit,
  "regulatory": regulatory,
  "manufacturing": manufacturing,
  "office": office,
  "coldchain": coldchain,
  "testing-lab": testingLab,
};

export function img(key: string): string {
  return IMAGES[key] ?? hero;
}
