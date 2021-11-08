import React from 'react';
import './style.css';

const WorkWithUsModal = () => {
    return (
        <>
            <div class="modal fade" id="workWithUsModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Looking for job opportunity ?</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Email your cv to info@rntsolar.com. If you match with our criteria we will contact you soon. 
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WorkWithUsModal;