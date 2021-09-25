import { Box, Flex, Heading, Link, useDisclosure } from "@chakra-ui/react";
import { memo, useCallback, VFC } from "react";
import { useHistory } from "react-router-dom";
import React from "react";

import { MenuIconButton } from "../../atoms/button/MenuIconButton";
import { MenuDrawer } from "../../molecules/MenuDrawer";

export const Header: VFC = memo(() => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();

  const onClickHome = useCallback(() => history.push("/home"), [history]);
  const onClickPointUsageStatusList = useCallback(
    () => history.push("/home/point_usage_status_list"),
    [history]
  );
  const onClickUserManagement = useCallback(
    () => history.push("/home/user_management"),
    [history]
  );
  const onClickSetting = useCallback(() => history.push("/home/setting"), [
    history
  ]);
  const onClickLogout = useCallback(() => history.push("/"), [history]);

  return (
    <>
      <Flex
        as="nav"
        bg="orange.400"
        color="gray.50"
        align="center"
        justify="space-between"
        padding={{ base: 3, md: 5 }}
      >
        <Flex
          align="center"
          as="a"
          mr={8}
          _hover={{ cursor: "pointer" }}
          onClick={onClickHome}
        >
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }}>
            カフェテリアプラン【ポイント管理】
          </Heading>
        </Flex>
        <Flex
          align="center"
          fontSize="sm"
          flexGrow={2}
          display={{ base: "none", md: "flex" }}
        >
          <Box pr={4}>
            <Link onClick={onClickPointUsageStatusList}>ポイント使用状況一覧</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickUserManagement}>User List</Link>
          </Box>
          <Box pr={4}>
            <Link onClick={onClickSetting}>Setting</Link>
          </Box>
          <Link onClick={onClickLogout}>Logout</Link>
        </Flex>
        <MenuIconButton onOpen={onOpen} />
      </Flex>
      <MenuDrawer
        onClose={onClose}
        isOpen={isOpen}
        onClickHome={onClickHome}
        onClickPointUsageStatusList={onClickPointUsageStatusList}
        onClickUserManagement={onClickUserManagement}
        onClickSetting={onClickSetting}
      />
    </>
  );
});
