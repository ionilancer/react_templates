import { useNavigate, useParams } from "react-router-dom";
import {
  creategGetTemplateResoponseModel,
  getTemplate,
} from "../../controllers/template-controller";
import { useEffect, useState } from "react";
import { AppNav } from "../../components/app-bar/app-bar";

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

  const TemplateComp = templateLoaded.component as React.ComponentType<any>;
  return (
    <>
      <AppNav {...{ title: "Template" }} />
      <TemplateComp {...templateLoaded.modelConstructor()} />
    </>
  );
};
