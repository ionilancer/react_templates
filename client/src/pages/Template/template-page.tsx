import { useNavigate, useParams } from "react-router-dom";
import {
  creategGetTemplateResoponseModel,
  getTemplate,
} from "../../templates/controllers/template-controller";
import { useEffect, useState } from "react";

export const TemplatePage = () => {
  const history = useNavigate();
  const [templateLoaded, setTemplateLoaded] = useState(
    creategGetTemplateResoponseModel()
  );
  const { templateCode } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTemplate(templateCode as string);
      setTemplateLoaded(response);
    };
    fetchData().catch(() => {
      history("/sorry");
    });
  }, [history, templateCode]);

  const TemplateComp = templateLoaded.component;
  return (
    <>
      <TemplateComp {...templateLoaded.modelConstructor} />
    </>
  );
};
