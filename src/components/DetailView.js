import { useEffect, useState } from 'react';
import { DetailUser } from './DetailUser';
import { Row, Col } from 'react-bootstrap';
import { DetailRepository } from './DetailRepository';
import { DetailAttributes } from './DetailAttributes';
import { DetailProject } from './DetailProject';
import { DetailAssigne } from './DetailAssigne';
import { DetailLastCommit } from './DetailLastCommit';
import { DetailVersion } from './DetailVersion';
import { DetailUrl } from './DetailUrl';
import { DetailMergeStatus } from './DetailMergeStatus';
import { withRouter } from 'react-router-dom';

export const DetailView = ({history}) => {

    
    const [mergeUnit, setMergeUnit] = useState({});
    
    useEffect(() => {
        console.log(history.location.state);
        setMergeUnit(history.location.state);
    }, [])

    return (
        <div>
            <Row style={{margin:'1% auto'}}>
                <Col>
                    <DetailAttributes mergeUnit={mergeUnit}/>
                </Col>
            </Row>
            <Row style={{margin:'1% auto'}}>
                <Col>
                    <DetailUser mergeUnit={mergeUnit}/>
                </Col>
            </Row>
            <Row style={{margin:'1% auto'}}>
                <Col>
                    <DetailRepository/>
                </Col>
            </Row>
            <Row style={{margin:'1% auto'}}>
                <Col>
                    <DetailProject/>
                </Col>
            </Row>
        </div>
    )
}

export default withRouter(DetailView);