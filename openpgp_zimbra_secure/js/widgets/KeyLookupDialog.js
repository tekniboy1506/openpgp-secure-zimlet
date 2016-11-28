/**
 * ***** BEGIN LICENSE BLOCK *****
 * OpenPGP Zimbra Secure is the open source digital signature and encrypt for Zimbra Collaboration Open Source Edition software
 * Copyright (C) 2016-present Nguyen Van Nguyen <nguyennv1981@gmail.com>

 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * any later version.

 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>
 * ***** END LICENSE BLOCK *****
 *
 * OpenPGP MIME Secure Email Zimlet
 *
 * Written by Nguyen Van Nguyen <nguyennv1981@gmail.com>
 */

KeyLookupDialog = function(handler, onOk, onCancel) {
    var keyServer = handler.getZimletContext().getConfig('openpgp-key-server');
    OpenPGPDialog.call(
        this,
        handler,
        AjxMessageFormat.format(handler.getMessage('keyLookupTitle'), keyServer),
        onOk,
        onCancel,
        [DwtDialog.CANCEL_BUTTON, DwtDialog.OK_BUTTON]
    );

    this.setView(new KeyLookupView({
        parent: this,
        handler: handler
    }));
};

KeyLookupDialog.prototype = new OpenPGPDialog;
KeyLookupDialog.prototype.constructor = KeyLookupDialog;

KeyLookupDialog.prototype.toString = function() {
    return 'KeyLookupDialog';
};

KeyLookupDialog.prototype.getPublicKey = function() {
    var publicKey = '';
    var keyLookup = document.getElementsByName('keyLookupValue');
    for(var i = 0; i < keyLookup.length; i++) {
        if (keyLookup[i].checked == true) {
            publicKey = keyLookup[i].value;
        }
    }
    return publicKey;
};
