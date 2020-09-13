import React from "react";
import PropTypes from "prop-types";
import Panel from "@vkontakte/vkui/dist/components/Panel/Panel";
import PanelHeader from "@vkontakte/vkui/dist/components/PanelHeader/PanelHeader";
import Button from "@vkontakte/vkui/dist/components/Button/Button";
import { Placeholder } from "@vkontakte/vkui";

const Home = ({ id, go }) => (
  <Panel id={id}>
    <PanelHeader>Пожертвования</PanelHeader>
    <Placeholder
      stretched
      action={
        <Button size="m" onClick={go} data-to="type">
          Создать сбор
        </Button>
      }
    >
      У Вас пока нет сборов.
      <br />
      Начните доброе дело.
    </Placeholder>
  </Panel>
);

Home.propTypes = {
  id: PropTypes.string.isRequired,
  go: PropTypes.func.isRequired,
};

export default Home;
