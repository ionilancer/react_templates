import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MenuContainer } from "../../components/";
import { CustomLink } from "../../components/custom-link";
import {
  creategGetTemplateResoponseModel,
  getTemplateList,
} from "../../controllers/template-controller";

export const Home = () => {
  const [templates, setTemplates] = useState([
    creategGetTemplateResoponseModel(),
  ]);
  const { templateCode } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await getTemplateList();
      setTemplates(response);
    };
    fetchData().catch((e) => {
      console.log("error", e);
    });
  }, [templateCode]);

  return (
    <>
      <MenuContainer />
      {templates.map((template) => (
        <p>
          <CustomLink
            href={`/template/${template.modelConstructor.code}`}
            title={template.modelConstructor.name}
          >
            {template.modelConstructor.code} - {template.modelConstructor.name}
          </CustomLink>
        </p>
      ))}
    </>
  );
};
