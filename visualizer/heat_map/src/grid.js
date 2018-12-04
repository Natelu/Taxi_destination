'use strict'

var grids_v = [[[-8.7862463, 40.91674], [-8.7862463, 41.423558032787064]], [[-8.77479922173913, 40.91674], [-8.77479922173913, 41.423558032787064]], [[-8.76335214347826, 40.91674], [-8.76335214347826, 41.423558032787064]], [[-8.75190506521739, 40.91674], [-8.75190506521739, 41.423558032787064]], [[-8.74045798695652, 40.91674], [-8.74045798695652, 41.423558032787064]], [[-8.729010908695649, 40.91674], [-8.729010908695649, 41.423558032787064]], [[-8.717563830434779, 40.91674], [-8.717563830434779, 41.423558032787064]], [[-8.706116752173909, 40.91674], [-8.706116752173909, 41.423558032787064]], [[-8.694669673913038, 40.91674], [-8.694669673913038, 41.423558032787064]], [[-8.683222595652168, 40.91674], [-8.683222595652168, 41.423558032787064]], [[-8.671775517391298, 40.91674], [-8.671775517391298, 41.423558032787064]], [[-8.660328439130428, 40.91674], [-8.660328439130428, 41.423558032787064]], [[-8.648881360869558, 40.91674], [-8.648881360869558, 41.423558032787064]], [[-8.637434282608687, 40.91674], [-8.637434282608687, 41.423558032787064]], [[-8.625987204347817, 40.91674], [-8.625987204347817, 41.423558032787064]], [[-8.614540126086947, 40.91674], [-8.614540126086947, 41.423558032787064]], [[-8.603093047826077, 40.91674], [-8.603093047826077, 41.423558032787064]], [[-8.591645969565207, 40.91674], [-8.591645969565207, 41.423558032787064]], [[-8.580198891304336, 40.91674], [-8.580198891304336, 41.423558032787064]], [[-8.568751813043466, 40.91674], [-8.568751813043466, 41.423558032787064]], [[-8.557304734782596, 40.91674], [-8.557304734782596, 41.423558032787064]], [[-8.545857656521726, 40.91674], [-8.545857656521726, 41.423558032787064]], [[-8.534410578260855, 40.91674], [-8.534410578260855, 41.423558032787064]], [[-8.522963499999985, 40.91674], [-8.522963499999985, 41.423558032787064]], [[-8.511516421739115, 40.91674], [-8.511516421739115, 41.423558032787064]], [[-8.500069343478245, 40.91674], [-8.500069343478245, 41.423558032787064]], [[-8.488622265217375, 40.91674], [-8.488622265217375, 41.423558032787064]], [[-8.477175186956504, 40.91674], [-8.477175186956504, 41.423558032787064]], [[-8.465728108695634, 40.91674], [-8.465728108695634, 41.423558032787064]], [[-8.454281030434764, 40.91674], [-8.454281030434764, 41.423558032787064]], [[-8.442833952173894, 40.91674], [-8.442833952173894, 41.423558032787064]], [[-8.431386873913024, 40.91674], [-8.431386873913024, 41.423558032787064]], [[-8.419939795652153, 40.91674], [-8.419939795652153, 41.423558032787064]], [[-8.408492717391283, 40.91674], [-8.408492717391283, 41.423558032787064]], [[-8.397045639130413, 40.91674], [-8.397045639130413, 41.423558032787064]], [[-8.385598560869543, 40.91674], [-8.385598560869543, 41.423558032787064]], [[-8.374151482608672, 40.91674], [-8.374151482608672, 41.423558032787064]], [[-8.362704404347802, 40.91674], [-8.362704404347802, 41.423558032787064]], [[-8.351257326086932, 40.91674], [-8.351257326086932, 41.423558032787064]], [[-8.339810247826062, 40.91674], [-8.339810247826062, 41.423558032787064]], [[-8.328363169565192, 40.91674], [-8.328363169565192, 41.423558032787064]], [[-8.316916091304321, 40.91674], [-8.316916091304321, 41.423558032787064]], [[-8.305469013043451, 40.91674], [-8.305469013043451, 41.423558032787064]], [[-8.294021934782581, 40.91674], [-8.294021934782581, 41.423558032787064]], [[-8.28257485652171, 40.91674], [-8.28257485652171, 41.423558032787064]], [[-8.27112777826084, 40.91674], [-8.27112777826084, 41.423558032787064]]]
var grids_h = [[[-8.7862463, 40.91674], [-8.27112777826084, 40.91674]], [[-8.7862463, 40.925186967213115], [-8.27112777826084, 40.925186967213115]], [[-8.7862463, 40.93363393442623], [-8.27112777826084, 40.93363393442623]], [[-8.7862463, 40.94208090163935], [-8.27112777826084, 40.94208090163935]], [[-8.7862463, 40.95052786885247], [-8.27112777826084, 40.95052786885247]], [[-8.7862463, 40.958974836065586], [-8.27112777826084, 40.958974836065586]], [[-8.7862463, 40.967421803278704], [-8.27112777826084, 40.967421803278704]], [[-8.7862463, 40.97586877049182], [-8.27112777826084, 40.97586877049182]], [[-8.7862463, 40.98431573770494], [-8.27112777826084, 40.98431573770494]], [[-8.7862463, 40.99276270491806], [-8.27112777826084, 40.99276270491806]], [[-8.7862463, 41.001209672131175], [-8.27112777826084, 41.001209672131175]], [[-8.7862463, 41.00965663934429], [-8.27112777826084, 41.00965663934429]], [[-8.7862463, 41.01810360655741], [-8.27112777826084, 41.01810360655741]], [[-8.7862463, 41.02655057377053], [-8.27112777826084, 41.02655057377053]], [[-8.7862463, 41.034997540983646], [-8.27112777826084, 41.034997540983646]], [[-8.7862463, 41.043444508196764], [-8.27112777826084, 41.043444508196764]], [[-8.7862463, 41.05189147540988], [-8.27112777826084, 41.05189147540988]], [[-8.7862463, 41.060338442623], [-8.27112777826084, 41.060338442623]], [[-8.7862463, 41.06878540983612], [-8.27112777826084, 41.06878540983612]], [[-8.7862463, 41.077232377049235], [-8.27112777826084, 41.077232377049235]], [[-8.7862463, 41.08567934426235], [-8.27112777826084, 41.08567934426235]], [[-8.7862463, 41.09412631147547], [-8.27112777826084, 41.09412631147547]], [[-8.7862463, 41.10257327868859], [-8.27112777826084, 41.10257327868859]], [[-8.7862463, 41.111020245901706], [-8.27112777826084, 41.111020245901706]], [[-8.7862463, 41.119467213114824], [-8.27112777826084, 41.119467213114824]], [[-8.7862463, 41.12791418032794], [-8.27112777826084, 41.12791418032794]], [[-8.7862463, 41.13636114754106], [-8.27112777826084, 41.13636114754106]], [[-8.7862463, 41.14480811475418], [-8.27112777826084, 41.14480811475418]], [[-8.7862463, 41.153255081967295], [-8.27112777826084, 41.153255081967295]], [[-8.7862463, 41.16170204918041], [-8.27112777826084, 41.16170204918041]], [[-8.7862463, 41.17014901639353], [-8.27112777826084, 41.17014901639353]], [[-8.7862463, 41.17859598360665], [-8.27112777826084, 41.17859598360665]], [[-8.7862463, 41.187042950819766], [-8.27112777826084, 41.187042950819766]], [[-8.7862463, 41.195489918032884], [-8.27112777826084, 41.195489918032884]], [[-8.7862463, 41.203936885246], [-8.27112777826084, 41.203936885246]], [[-8.7862463, 41.21238385245912], [-8.27112777826084, 41.21238385245912]], [[-8.7862463, 41.22083081967224], [-8.27112777826084, 41.22083081967224]], [[-8.7862463, 41.229277786885355], [-8.27112777826084, 41.229277786885355]], [[-8.7862463, 41.23772475409847], [-8.27112777826084, 41.23772475409847]], [[-8.7862463, 41.24617172131159], [-8.27112777826084, 41.24617172131159]], [[-8.7862463, 41.25461868852471], [-8.27112777826084, 41.25461868852471]], [[-8.7862463, 41.263065655737826], [-8.27112777826084, 41.263065655737826]], [[-8.7862463, 41.271512622950944], [-8.27112777826084, 41.271512622950944]], [[-8.7862463, 41.27995959016406], [-8.27112777826084, 41.27995959016406]], [[-8.7862463, 41.28840655737718], [-8.27112777826084, 41.28840655737718]], [[-8.7862463, 41.2968535245903], [-8.27112777826084, 41.2968535245903]], [[-8.7862463, 41.305300491803415], [-8.27112777826084, 41.305300491803415]], [[-8.7862463, 41.31374745901653], [-8.27112777826084, 41.31374745901653]], [[-8.7862463, 41.32219442622965], [-8.27112777826084, 41.32219442622965]], [[-8.7862463, 41.33064139344277], [-8.27112777826084, 41.33064139344277]], [[-8.7862463, 41.339088360655886], [-8.27112777826084, 41.339088360655886]], [[-8.7862463, 41.347535327869004], [-8.27112777826084, 41.347535327869004]], [[-8.7862463, 41.35598229508212], [-8.27112777826084, 41.35598229508212]], [[-8.7862463, 41.36442926229524], [-8.27112777826084, 41.36442926229524]], [[-8.7862463, 41.37287622950836], [-8.27112777826084, 41.37287622950836]], [[-8.7862463, 41.381323196721475], [-8.27112777826084, 41.381323196721475]], [[-8.7862463, 41.38977016393459], [-8.27112777826084, 41.38977016393459]], [[-8.7862463, 41.39821713114771], [-8.27112777826084, 41.39821713114771]], [[-8.7862463, 41.40666409836083], [-8.27112777826084, 41.40666409836083]], [[-8.7862463, 41.415111065573946], [-8.27112777826084, 41.415111065573946]], [[-8.7862463, 41.423558032787064], [-8.27112777826084, 41.423558032787064]]]