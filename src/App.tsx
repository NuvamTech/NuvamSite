import './App.css';
import { PageShell } from './components/layout/PageShell';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { SinglePage } from './pages/SinglePage';
import { Routes, Route } from 'react-router-dom';

// Service Pages
import { DigitalStrategyService } from './pages/services/digital-strategy';
import { DigitalTransformationService } from './pages/services/digital-transformation';
import { StrategicResourcingService } from './pages/services/strategic-resourcing';
import { ChangeManagementService } from './pages/services/change-management';
import { CorporateTrainingsService } from './pages/services/corporate-trainings';
import { DataAuditService } from './pages/services/data-audit';
import { MicrosoftLicensingService } from './pages/services/microsoft-licensing';
import { SustainabilityManagerService } from './pages/services/sustainability-manager';
import { PowerBIReportingService } from './pages/services/power-bi';
import { DataWarehouseService } from './pages/services/data-warehouse';
import { AIoTService } from './pages/services/ai-iot';
import { AzureDataFoundryService } from './pages/services/azure-data-foundry';
import { Dynamics365Service } from './pages/services/dynamics-365';
import { M365DeploymentService } from './pages/services/m365-deployment';
import { ServicesIndex } from './pages/services/index';

// Product & Resource Pages
import { ProductsIndex } from './pages/products/index';
import { ProductDetail } from './pages/products/detail';
import { ResourcesIndex } from './pages/resources/index';

export default function App() {
  return (
    <PageShell>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<SinglePage />} />
        <Route path="/services" element={<ServicesIndex />} />
        <Route path="/services/digital-strategy" element={<DigitalStrategyService />} />
        <Route path="/services/digital-transformation" element={<DigitalTransformationService />} />
        <Route path="/services/strategic-resourcing" element={<StrategicResourcingService />} />
        <Route path="/services/change-management" element={<ChangeManagementService />} />
        <Route path="/services/corporate-trainings" element={<CorporateTrainingsService />} />
        <Route path="/services/data-audit" element={<DataAuditService />} />
        <Route path="/services/microsoft-licensing" element={<MicrosoftLicensingService />} />
        <Route path="/services/sustainability-manager" element={<SustainabilityManagerService />} />
        <Route path="/services/power-bi" element={<PowerBIReportingService />} />
        <Route path="/services/data-warehouse" element={<DataWarehouseService />} />
        <Route path="/services/ai-iot" element={<AIoTService />} />
        <Route path="/services/azure-data-foundry" element={<AzureDataFoundryService />} />
        <Route path="/services/dynamics-365" element={<Dynamics365Service />} />
        <Route path="/services/m365-deployment" element={<M365DeploymentService />} />

        {/* Product & Resource Routes */}
        <Route path="/products" element={<ProductsIndex />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/resources" element={<ResourcesIndex />} />
      </Routes>
    </PageShell>
  );
}
