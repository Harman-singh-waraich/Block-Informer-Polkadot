import React, { useEffect, useState } from 'react';
import { useSubstrate } from './substrate-lib';
import { Icon, Table , Grid} from 'semantic-ui-react'

function Blockinfo () {
  const { api,keyring } = useSubstrate();
  const [block, setBlockInfo] = useState({parentHash:"",
                                                            number:"",
                                                            stateRoot:"",
                                                            extrinsicsRoot:"",
                                                            digest:""});

 
  useEffect(() => {
    api.derive.chain.subscribeNewHeads(header =>{
        setBlockInfo({
            parentHash:header.parentHash.toString(),
            number:header.number.toString(),
            stateRoot:header.stateRoot.toString(),
            extrinsicsRoot:header.extrinsicsRoot.toString(),
            digest:header.digest.toString()
        })
        
  });
  }, [api, keyring, setBlockInfo]);

  return (
      <Grid.Column>
        <Table celled striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan='3'><Icon name='braille' /> Block Info</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
      
          <Table.Body>
            <Table.Row>
              <Table.Cell collapsing>
                <Icon name='tags' /> Parent Hash
              </Table.Cell>
              <Table.Cell>{block.parentHash}</Table.Cell>
            </Table.Row>

            <Table.Row>
              <Table.Cell>
                <Icon name='tags' /> Block Number
              </Table.Cell>
              <Table.Cell>{block.number}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='tags' /> State Root
              </Table.Cell>
              <Table.Cell>{block.stateRoot}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='file outline' /> Extrinsics Root
              </Table.Cell>
              <Table.Cell>{block.extrinsicsRoot}</Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Icon name='file outline' /> Digest
              </Table.Cell>
              <Table.Cell>{block.digest}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
        </Grid.Column>
  );
}

export default  Blockinfo;
