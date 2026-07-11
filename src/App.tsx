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
import { DataAuditService } from './pages/services/data-audit';
import { PowerBIReportingService } from './pages/services/power-bi';
import { DataWarehouseService } from './pages/services/data-warehouse';
import { AIoTService } from './pages/services/ai-iot';
import { AzureDataFoundryService } from './pages/services/azure-data-foundry';
import { ServicesIndex } from './pages/services/index';

// Software & Engineering Service Pages
import { SoftwareDevelopmentService } from './pages/services/software-development';
import { CustomAppDevService } from './pages/services/custom-app-dev';
import { SystemIntegrationService } from './pages/services/system-integration';
import { AutomationService } from './pages/services/automation';
import { CopilotAgentsService } from './pages/services/copilot-agents';
import { AzureCloudService } from './pages/services/azure-cloud';

// Engagement Model Service Pages
import { ConsultingAdvisoryService } from './pages/services/consulting-advisory';
import { ProfessionalServicesService } from './pages/services/professional-services';
import { ManagedServicesService } from './pages/services/managed-services';

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
        <Route path="/services/data-audit" element={<DataAuditService />} />
        <Route path="/services/power-bi" element={<PowerBIReportingService />} />
        <Route path="/services/data-warehouse" element={<DataWarehouseService />} />
        <Route path="/services/ai-iot" element={<AIoTService />} />
        <Route path="/services/azure-data-foundry" element={<AzureDataFoundryService />} />

        {/* Software & Engineering Service Routes */}
        <Route path="/services/software-development" element={<SoftwareDevelopmentService />} />
        <Route path="/services/custom-app-dev" element={<CustomAppDevService />} />
        <Route path="/services/system-integration" element={<SystemIntegrationService />} />
        <Route path="/services/automation" element={<AutomationService />} />
        <Route path="/services/copilot-agents" element={<CopilotAgentsService />} />
        <Route path="/services/azure-cloud" element={<AzureCloudService />} />

        {/* Engagement Model Service Routes */}
        <Route path="/services/consulting-advisory" element={<ConsultingAdvisoryService />} />
        <Route path="/services/professional-services" element={<ProfessionalServicesService />} />
        <Route path="/services/managed-services" element={<ManagedServicesService />} />

        {/* Product & Resource Routes */}
        <Route path="/products" element={<ProductsIndex />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/resources" element={<ResourcesIndex />} />
      </Routes>
    </PageShell>
  );
}
