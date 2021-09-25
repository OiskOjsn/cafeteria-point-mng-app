import React, { memo, useEffect, VFC } from "react";

import {
    Box,
    Center,
    Spinner,
    Checkbox,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
  } from "@chakra-ui/react";

import { useAllUsers } from "../../../hooks/useAllUsers";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";


export const PointUsageTable: VFC = memo(() => {
    const { getUsers, users, loading } = useAllUsers();

    useEffect(() => getUsers(), [getUsers]);

    return (
        <Box
            w="auto"
            bg="white"
            borderRadius="10px"
            shadow="md"
            m={5}
            p={5}
        >
            {loading ? (
                <Center height="100vh">
                    <Spinner />
                </Center>
            ) : (

                <Table variant="striped" colorScheme="orange" size="md">
                    <TableCaption>各メンバーのポイント使用状況</TableCaption>
                    <Thead>
                        <Tr>
                            <Th><Checkbox colorScheme="orange" /></Th>
                            <Th>氏名</Th>
                            <Th>メールアドレス</Th>
                            <Th isNumeric>所持ポイント</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {users.map((user) => (
                            <Tr key={user.id}>    
                                <Td><Checkbox colorScheme="orange" /></Td>
                                <Td>{user.name}</Td>
                                <Td>{user.email}</Td>
                                <Td isNumeric>{user.id}</Td>
                                <Td><PrimaryButton onClick={() => {}}>編集</PrimaryButton></Td>
                            </Tr>
                        ))}
                    </Tbody>
                    <Tfoot>
                        <Tr fontSize={{ base: "md", md: "lg" }}>
                            <Th><Checkbox colorScheme="orange" /></Th>
                            <Th>氏名</Th>
                            <Th>メールアドレス</Th>
                            <Th isNumeric>所持ポイント</Th>
                            <Th></Th>
                        </Tr>
                    </Tfoot>
                </Table>
            )}
        </Box>
    )
})